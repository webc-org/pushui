#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

cd "$(dirname "$0")/.."

# Get commit message
if [ -z "$1" ]; then
  echo -e "${YELLOW}Enter commit message:${NC}"
  read -r MESSAGE
else
  MESSAGE="$1"
fi

if [ -z "$MESSAGE" ]; then
  echo -e "${RED}Commit message required${NC}"
  exit 1
fi

# Check if there are changes to commit
git add .
if git diff --cached --quiet; then
  echo -e "${YELLOW}No changes to commit${NC}"
  exit 0
fi

echo -e "${GREEN}[1/6] Linting...${NC}"
if ! bun run lint; then
  echo -e "${RED}Lint failed!${NC}"
  git reset HEAD . > /dev/null 2>&1
  exit 1
fi

echo -e "${GREEN}[2/6] Running tests...${NC}"
if ! bun run test; then
  echo -e "${RED}Tests failed!${NC}"
  git reset HEAD . > /dev/null 2>&1
  exit 1
fi

echo -e "${GREEN}[3/6] Building packages...${NC}"
if ! bun run build > /dev/null 2>&1; then
  echo -e "${RED}Build failed!${NC}"
  git reset HEAD . > /dev/null 2>&1
  exit 1
fi

echo -e "${GREEN}[4/6] Building storybook...${NC}"
if ! bun run build-storybook > /dev/null 2>&1; then
  echo -e "${RED}Storybook build failed!${NC}"
  git reset HEAD . > /dev/null 2>&1
  exit 1
fi

echo -e "${GREEN}[5/6] Bumping versions...${NC}"

bump_version() {
  local pkg="$1"
  node -e "
    const fs = require('fs');
    const p = JSON.parse(fs.readFileSync('$pkg/package.json','utf8'));
    const [maj,min,pat] = p.version.split('.').map(Number);
    p.version = pat >= 99 ? maj+'.'+( min+1)+'.0' : maj+'.'+min+'.'+(pat+1);
    fs.writeFileSync('$pkg/package.json', JSON.stringify(p, null, 2) + '\n');
    process.stdout.write(p.version);
  "
}

STYLES_VERSION=$(bump_version packages/styles)
echo -e "  @pushui/styles: ${YELLOW}${STYLES_VERSION}${NC}"

REACT_VERSION=$(bump_version packages/react)
echo -e "  @pushui/react:  ${YELLOW}${REACT_VERSION}${NC}"

git add .
git commit -m "$MESSAGE (v$REACT_VERSION)"

echo -e "${GREEN}[6/6] Pushing...${NC}"
if ! git push; then
  echo -e "${RED}Push failed! Rolling back...${NC}"
  git reset --hard HEAD~1
  exit 1
fi

echo -e "${GREEN}✅ Released @pushui/styles@${STYLES_VERSION} and @pushui/react@${REACT_VERSION}${NC}"

#!/bin/bash

REPOS=(
"https://github.com/potpissers/Potpissers-web.git"
"https://github.com/memeasaur/pvputils-web.git"
"https://github.com/crameron/showcase.git"

"https://github.com/pvputils/fabricpvputils-oss.git"
"https://github.com/crameron/fabricpvputils-softcheats.git"

"https://github.com/potpissers/Potpissers-upstream.git"
"https://github.com/potpissers/Potpissers-kollusion.git"
"https://github.com/potpissers/Potpissers-cubecore.git"
"https://github.com/potpissers/Potpissers-postgres.git"
"https://github.com/potpissers/Potpissers-velocity.git"
)

TMP_DIR="temp_projects"
mkdir -p $TMP_DIR
cd $TMP_DIR || exit

for REPO in "${REPOS[@]}"; do
  git clone "$REPO" &
done
git clone "git@github.com:memeasaur/Untitled-moviesite.git" &
wait

echo "{}" > ../public/loc.json
for DIR in */; do
  PROJECT_NAME="${DIR%/}"

  cloc "$DIR" --json | jq --arg key "$PROJECT_NAME" '. as $data | {($key): $data}' | jq -s '.[0] * .[1]' ../public/loc.json - > ../loc.tmp.json
  mv ../loc.tmp.json ../public/loc.json
done

KEY="Potpissers-purpur"
JSON=$(curl -s -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/potpissers/Potpissers-purpur/commits/ad7ba51c21bf52e61d4d75866f9c81a28cdfe75f")
STATS=$(echo "$JSON" | jq  '.stats')
jq --arg key "$KEY" --argjson data "$STATS" '. + {($key): $data}' ../public/loc.json > ../public/loc.tmp.json
mv ../public/loc.tmp.json ../public/loc.json

cd ..
rm -rf $TMP_DIR

echo "done"
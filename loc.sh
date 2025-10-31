#!/bin/bash

REPOS=(
"https://github.com/potpissers/Potpissers-web.git"
"https://github.com/memeasaur/pvputils-web.git"
"https://github.com/pvputils/fabricpvputils-oss.git"

"https://github.com/potpissers/Potpissers-upstream.git"
"https://github.com/potpissers/Potpissers-kollusion.git"
"https://github.com/potpissers/Potpissers-cubecore.git"
"https://github.com/potpissers/Potpissers-postgres.git"
"https://github.com/potpissers/Potpissers-velocity.git"
"https://github.com/potpissers/Potpissers-purpur.git"
)

TMP_DIR="temp_projects"
mkdir -p $TMP_DIR
cd $TMP_DIR || exit # ?

for REPO in "${REPOS[@]}"; do
  git clone "$REPO" &
done
wait

echo "{}" > ../loc.json
for DIR in */; do
  PROJECT_NAME="${DIR%/}"

  cloc "$DIR" --json | jq --arg key "$PROJECT_NAME" '. as $data | {($key): $data}' | jq -s '.[0] * .[1]' ../loc.json - > ../loc.tmp.json
  mv ../loc.tmp.json ../loc.json
done

cd ..
rm -rf $TMP_DIR

echo "LOC data saved to projects-loc.json"
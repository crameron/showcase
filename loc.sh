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

#git clone "https://github.com/potpissers/Potpissers-purpur.git"
#cd Potpissers-purpur || exit
#COMMIT_HASH=$(git log --all --grep="CamwenPurpur" --format="%H" -n 1)
#git checkout "$COMMIT_HASH"
#cd ..
#cloc "Potpissers-purpur" --json | jq --arg key "Purpur" '. as $data | {($key): $data}' \
#  | jq -s '.[0] * .[1]' ../public/loc.json - > ../loc.tmp.json
#mv ../loc.tmp.json ../public/loc.json

cd ..
rm -rf $TMP_DIR

echo "done"
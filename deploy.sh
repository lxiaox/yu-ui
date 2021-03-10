rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -m main &&
git remote add origin git@gitee.com:liuxiaoxiao21/yu-ui-website.git &&
git push -f -u origin main &&
cd -
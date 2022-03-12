# 部署脚本（打包项目，并把打包好的代码发布到github/ 码云）
# 使用方法：命令行输入 sh deploy.sh
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -m main &&
# 码云官网，注意：码云要在官网点一下update按钮
git remote add origin git@gitee.com:liuxiaoxiao21/yu-ui-website.git &&
git push -f -u origin main &&
cd - &&
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -m main &&
# github官网
git remote add origin git@github.com:lxiaox/YU-UI-Website.git &&
git push -f -u origin main &&
cd -
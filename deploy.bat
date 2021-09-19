npm run build
cd .\docs\.vuepress\dist\
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:CherryAya/SakuraiSenrin-wiki-vuepress.git main:gh-pages
pause
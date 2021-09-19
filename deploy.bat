npm run build
cd docs\.vuepress\dist
git add -A
git commit -m 'deploy'
rem git push -f git@github.com:CherryAya/SakuraiSenrin-wiki-vuepress.git main:gh-pages
git push -u origin gh-pages
pause
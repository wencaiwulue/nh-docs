git checkout dev
        cd docs/changelogs
        git config user.email "895703375@qq.com"
        git config user.name "naison"
        time="sdf ("$(date "+%Y-%m-%d")")"
        echo $time
        sed -i "s/{{Next}}/$time/g" *.md
        head 0.4.x.md
        cd ../../
        git add .
        git commit -m "update version"

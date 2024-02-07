# Notes

If you get an error that says something like:

```
npm ERR! Your cache folder contains root-owned files, due to a bug in
npm ERR! previous versions of npm which has since been addressed.
npm ERR! 
npm ERR! To permanently fix this problem, please run:
npm ERR!   sudo chown -R 506:20 "/Users/ppraweenwongwuth/.npm"
```

Run `>pwd`

Will return something like:
`/Users/ppraweenwongwuth/Documents/GitHub/Asiabite2`

Then copy that and add /logs
`/Users/ppraweenwongwuth/Documents/GitHub/Asiabite2/logs`

Make sure there is a `logs/` folder in the project directory

The rerun `npm install`

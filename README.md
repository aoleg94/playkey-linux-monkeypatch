# Obsolete
A correct way to set up Playkey on Linux is to make XDG .desktop file: https://pastebin.com/9HAeAXZW

NB: `Exec` value should be prefixed with `/usr/bin/wine ` if your distro does not provide binfmt support for Wine

# playkey-linux-monkeypatch
1. Install Playkey for windows using wine;
2. Install playkey.user.js into browser (use TamperMonkey for Chrome);
3. Run playkey-runner.py;
4. Enjoy your cloud gaming.

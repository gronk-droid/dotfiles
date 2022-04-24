set -g VIRTUALFISH_VERSION 2.5.4
set -g VIRTUALFISH_PYTHON_EXEC /usr/local/Cellar/python@3.9/3.9.10/bin/python3.9
set -g VIRTUALFISH_HOME ~/.virtualenvs
set -g WORKON_HOME ~/.virtualenvs
source /usr/local/lib/python3.9/site-packages/virtualfish/virtual.fish
source /usr/local/lib/python3.9/site-packages/virtualfish/compat_aliases.fish
source /usr/local/lib/python3.9/site-packages/virtualfish/auto_activation.fish
source /usr/local/lib/python3.9/site-packages/virtualfish/projects.fish
source /usr/local/lib/python3.9/site-packages/virtualfish/environment.fish
emit virtualfish_did_setup_plugins

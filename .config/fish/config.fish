if status is-interactive
    # Commands to run in interactive sessions can go here
end
fish_add_path /usr/local/sbin

# Paths to your tackle
set tacklebox_path ~/.tackle ~/.tacklebox

# Theme
# set tacklebox_theme entropy

# Welcome message
function fish_greeting
  _logo
end
funcsave fish_greeting

# vtop function
alias vtop "vtop --theme monokai"
funcsave vtop

# map ls to exa function
alias ls "exa --icons -a"
funcsave ls

# adding pipes-rs command for pipes
alias pipes "pipes-rs"
funcsave pipes

# alias NPM_CONFIG_PREFIX ~/.npm-global
# funcsave NPM_CONFIG_PREFIX

# Which modules would you like to load? (modules can be found in ~/.tackle/modules/*)
# Custom modules may be added to ~/.tacklebox/modules/
# Example format: set tacklebox_modules virtualfish virtualhooks

# Which plugins would you like to enable? (plugins can be found in ~/.tackle/plugins/*)
# Custom plugins may be added to ~/.tacklebox/plugins/
# Example format: set tacklebox_plugins python extract

# Load Tacklebox configuration
. ~/.tacklebox/tacklebox.fish


############ important ###########
# Load the tacklebox source script
source ~/.tacklebox/tacklebox.fish

# for starship prompt
starship init fish | source

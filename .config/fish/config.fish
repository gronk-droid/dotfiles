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
  # fortune -s
  _logo
end
funcsave fish_greeting

# vtop function
alias vtop "vtop --theme monokai"
funcsave vtop

# exa function
alias ls "exa --icons"
funcsave ls

alias finder "open ."
funcsave finder

alias pipes "pipes-rs"
funcsave pipes

set -Ux GITHUB_TOKEN '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'
set -Ux GIST_ID 'fd35d81711ecf6cc4eb7ac5c85d371dc'

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

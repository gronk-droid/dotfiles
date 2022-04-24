function ls --wraps='exa --icons -a' --description 'alias ls exa --icons -a'
  exa --icons -a $argv; 
end

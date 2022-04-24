function c --wraps='pygmentize -g -O style=colorful,linenos=1' --description 'alias c pygmentize -g -O style=colorful,linenos=1'
  pygmentize -g -O style=colorful,linenos=1 $argv; 
end

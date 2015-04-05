PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]Ruchee\[\033[00m\]: \[\033[01;34m\]\w\[\033[00m\] \$ '


if [ `uname` == 'Darwin' ]; then
  platform='mac'
else
  platform='linux'
fi


if [ $platform == 'mac' ]; then
  alias ls='ls -hF -G'
else
  alias ls='ls -hF --color=auto'
fi

alias ll='ls -l'
alias la='ls -A'
alias cls='clear'
alias grep='grep --color'

alias fgall='find . -type f | xargs grep --color -n '
alias fgphp='find . -type f -name "*.php" | xargs grep --color -n '
alias fgjs='find . -type f -name "*.js" | xargs grep --color -n '
alias fgcss='find . -type f -name "*.css" | xargs grep --color -n '
alias fghtml='find . -type f -name "*.html" | xargs grep --color -n '
alias fgtwig='find . -type f -name "*.twig" | xargs grep --color -n '
alias fgblade='find . -type f -name "*.blade" | xargs grep --color -n '
alias fgtpl='find . -type f -name "*.tpl" | xargs grep --color -n '


# For Promptline
if [ -e "$HOME/.promptline" ]; then
  source "$HOME/.promptline"
fi

# For Mac Brew
if [ $platform == 'mac' ]; then
  export PATH="/usr/local/sbin:/usr/local/bin:$PATH"
fi

# For Java
if [ $platform == 'mac' ]; then
  export JAVA_HOME=$(/usr/libexec/java_home)
fi

# For PHP
export PATH="$HOME/apps:$HOME/apps/vendor/bin:$PATH"

# For Node
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh

# For Go
# export GOPATH="$HOME/apps/go"
# export PATH="$HOME/apps/go/bin:$PATH"

# For Rb
# [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"
# export PATH="$HOME/.rvm/bin:$PATH"

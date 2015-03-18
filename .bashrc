PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]Ruchee\[\033[00m\]: \[\033[01;34m\]\w\[\033[00m\] \$ '


platform='linux'
if [ `uname` == 'FreeBSD' ]; then
  platform='freebsd'
elif [ `uname` == 'Darwin' ]; then
  platform='mac'
elif [[ `uname` =~ ^CYGWIN ]]; then
  platform='cygwin'
fi


if [ $platform == 'linux' ] || [ $platform == 'cygwin' ]; then
  alias ls='ls -hF --color=auto'
else
  alias ls='ls -hF -G'
fi
alias ll='ls -l'
alias la='ls -A'
alias cls='clear'
alias grep='grep --color'


# For Mac
if [ $platform == 'mac' ]; then
  export PATH="/usr/local/sbin:/usr/local/bin:$PATH"
fi

# For Java
if [ $platform == 'mac' ]; then
  export JAVA_HOME=$(/usr/libexec/java_home)
fi

# For Go
# export GOPATH="$HOME/apps/go"
# export PATH="$HOME/apps/go/bin:$PATH"

# For RVM
# [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"
# export PATH="$HOME/.rvm/bin:$PATH"

# For NVM
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh

# For Other Tools
export PATH="$HOME/apps:$HOME/apps/vendor/bin:$PATH"

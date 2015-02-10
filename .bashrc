PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]Ruchee\[\033[00m\]: \[\033[01;34m\]\w\[\033[00m\] \$ '


alias ls='ls -hF -G'
alias ll='ls -l'
alias la='ls -A'
alias cls='clear'
alias grep='grep --color'


# For Mac
export PATH="/usr/local/sbin:/usr/local/bin:$PATH"

# For Go
export GOPATH="$HOME/apps/go"
export PATH="$HOME/apps/go/bin:$PATH"

# For Java
# export JAVA_HOME=$(/usr/libexec/java_home)

# For RVM
# [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"
# export PATH="$HOME/.rvm/bin:$PATH"

# For NVM
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh

# For Other Tools
export PATH="$HOME/apps:$HOME/apps/vendor/bin:$PATH"

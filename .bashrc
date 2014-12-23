PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]Ruchee\[\033[00m\]: \[\033[01;34m\]\w\[\033[00m\] \$ '


alias less='less -r'                          # raw control characters
alias whence='type -a'                        # where, of a sort
alias grep='grep --color'                     # show differences in colour
alias egrep='egrep --color=auto'              # show differences in colour
alias fgrep='fgrep --color=auto'              # show differences in colour
alias ls='ls -hF --color=tty'                 # classify files in colour
alias dir='ls --color=auto --format=vertical'
alias vdir='ls --color=auto --format=long'
alias ll='ls -l'                              # long list
alias la='ls -A'                              # all but . and ..
alias l='ls -CF'                              #
alias cls='clear'                             # clear input
alias chrome='chromium-browser'               # chromium short


# For Go
export GOPATH="$HOME/apps/go"

# For RVM
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"
export PATH="$HOME/.rvm/bin:$PATH"

# For NVM
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh

# Other Tools
export PATH="$HOME/apps:$HOME/apps/go/bin:$HOME/apps/vendor/bin:$PATH"

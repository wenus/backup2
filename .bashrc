PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]Ruchee\[\033[00m\]: \[\033[01;34m\]\w\[\033[00m\] \$ '
# PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]: \[\033[01;34m\]\w\[\033[00m\]\$ '


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

alias vi='mousepad'                           # little text editor
alias pdf='okular'                            # pdf viewer


# For RVM
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
export PATH="$HOME/.rvm/bin:$PATH" # Add RVM to PATH for scripting

# For NVM
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh # This loads NVM

# Other Tools
export PATH="$HOME/ruchee/apps/bin:$PATH"
export PATH="$HOME/ruchee/apps/sbt/bin:$PATH"
export PATH="$HOME/ruchee/apps/dart/bin:$PATH"
export PATH="$HOME/ruchee/apps/elixir/bin:$PATH"

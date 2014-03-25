// For C/C++
SyntaxHighlighter.brushes.Cpp = function() {
    var datatypes = 'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' +
                    'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' +
                    'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' +
                    'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' +
                    'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' +
                    'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' +
                    'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' +
                    'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' +
                    'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' +
                    'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' +
                    'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' +
                    'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' +
                    'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' +
                    'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' +
                    'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' +
                    'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' +
                    'char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' +
                    'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' +
                    'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' +
                    '__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' +
                    'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' +
                    'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' +
                    'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' +
                    'va_list wchar_t wctrans_t wctype_t wint_t signed';

    var keywords =  'break case catch class const __finally __exception __try ' +
                    'const_cast continue private public protected __declspec ' +
                    'default delete deprecated dllexport dllimport do dynamic_cast ' +
                    'else enum explicit extern if for friend goto inline ' +
                    'mutable naked namespace new noinline noreturn nothrow ' +
                    'register reinterpret_cast return selectany ' +
                    'sizeof static static_cast struct switch template this ' +
                    'thread throw true false try typedef typeid typename union ' +
                    'using uuid virtual void volatile whcar_t while';

    var functions = 'assert isalnum isalpha iscntrl isdigit isgraph islower isprint' +
                    'ispunct isspace isupper isxdigit tolower toupper errno localeconv ' +
                    'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod ' +
                    'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf ' +
                    'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start ' +
                    'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen ' +
                    'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell ' +
                    'fwrite getc getchar gets perror printf putc putchar puts remove ' +
                    'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ' +
                    'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol ' +
                    'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' +
                    'mbtowc qsort rand realloc srand strtod strtol strtoul system ' +
                    'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr ' +
                    'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp ' +
                    'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime ' +
                    'clock ctime difftime gmtime localtime mktime strftime time';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /^ *#.*/gm, css: 'preprocessor' },
        { regex: new RegExp(this.getKeywords(datatypes), 'gm'), css: 'color1 bold' },
        { regex: new RegExp(this.getKeywords(functions), 'gm'), css: 'functions bold' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword bold' }
    ];
};

SyntaxHighlighter.brushes.Cpp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Cpp.aliases   = ['c', 'cpp'];


// For Lua
(function() {
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var keywords = 'and break do else elseif end false for function if in ' +
                       'local nil not or repeat return then true until while';

        var functions = '_G _VERSION assert collectgarbage dofile error getfenv ' +
                        'getmetatable ipairs load module next pairs pcall print ' +
                        ' rawequal rawget rawset require select setfenv setmetatable ' +
                        'tonumber tostring type unpack xpcall ' +
                        'coroutine.create coroutine.resume coroutine.running ' +
                        'coroutine.status coroutine.wrap coroutine.yield ' +
                        'debug.debug debug.getfenv debug.gethook debug.getinfo ' +
                        'debug.getlocal debug.getmetatable debug.getregistry ' +
                        'debug.getupvalue debug.setfenv debug.sethook debug.setlocal ' +
                        'debug.setmetatable debug.setupvalue debug.traceback ' +
                        'file:close file:flush file:lines file:read file:seek ' +
                        'file:setvbuf file:write' +
                        'io.close io.flush io.input io.lines io.open io.output ' +
                        'io.popen io.read io.stderr io.stdin io.stdout io.tmpfile ' +
                        'io.type io.write ' +
                        'math.abs math.acos math.asin math.atan math.atan2 math.ceil ' +
                        'math.cos math.cosh math.deg math.exp math.floor math.fmod ' +
                        'math.frexp math.huge math.ldexp math.log math.log10 math.max ' +
                        'math.min math.modf math.pi math.pow math.rad math.random ' +
                        'math.randomseed math.sin math.sinh math.sqrt math.tan math.tanh ' +
                        'os.clock os.date os.difftime os.execute os.exit os.getenv os.remove ' +
                        'os.rename os.setlocale os.time os.tmpname ' +
                        'package.cpath package.loaded package.loaders package.loadlib ' +
                        'package.path package.preload package.seeall ' +
                        'string.byte string.char string.dump string.find string.format ' +
                        'string.gmatch string.gsub string.len string.lower string.match ' +
                        'string.rep string.reverse string.sub string.upper table.concat ' +
                        'table.insert table.maxn table.remove table.sort';

        this.regexList = [
            { regex: /--.*/gm, css: 'comments' },
            { regex: /--\[\[[\S\s]*\]\]/gm, css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: 'string' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
            { regex: new RegExp(this.getKeywords(functions), 'gm'), css: 'functions' }
        ];
    }

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['lua'];

    SyntaxHighlighter.brushes.Lua = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


// For Perl
(function() {
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var funcs =
            'abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr ' +
            'chroot close closedir connect cos crypt defined delete each endgrent ' +
            'endhostent endnetent endprotoent endpwent endservent eof exec exists ' +
            'exp fcntl fileno flock fork format formline getc getgrent getgrgid ' +
            'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr ' +
            'getnetbyname getnetent getpeername getpgrp getppid getpriority ' +
            'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid ' +
            'getservbyname getservbyport getservent getsockname getsockopt glob ' +
            'gmtime grep hex index int ioctl join keys kill lc lcfirst length link ' +
            'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd ' +
            'oct open opendir ord pack pipe pop pos print printf prototype push ' +
            'quotemeta rand read readdir readline readlink readpipe recv rename ' +
            'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl ' +
            'semget semop send setgrent sethostent setnetent setpgrp setpriority ' +
            'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread ' +
            'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf ' +
            'sqrt srand stat study substr symlink syscall sysopen sysread sysseek ' +
            'system syswrite tell telldir time times tr truncate uc ucfirst umask ' +
            'undef unlink unpack unshift utime values vec wait waitpid warn write';

        var keywords =
            'bless caller continue dbmclose dbmopen die do dump else elsif eval exit ' +
            'for foreach goto if import last local my next no our package redo ref ' +
            'require return sub tie tied unless untie until use wantarray while';

        this.regexList = [
            { regex: new RegExp('#[^!].*$', 'gm'), css: 'comments' },
            { regex: new RegExp('^\\s*#!.*$', 'gm'), css: 'preprocessor' },
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
            { regex: new RegExp('(\\$|@|%)\\w+', 'g'), css: 'variable' },
            { regex: new RegExp(this.getKeywords(funcs), 'gmi'), css: 'functions' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
        ];

        this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
    }

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['perl'];

    SyntaxHighlighter.brushes.Perl = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


// For PHP
SyntaxHighlighter.brushes.Php = function() {
    var funcs = 'abs acos acosh addcslashes addslashes ' +
        'array_change_key_case array_chunk array_combine array_count_values array_diff '+
        'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
        'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
        'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
        'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
        'array_push array_rand array_reduce array_reverse array_search array_shift '+
        'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
        'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
        'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
        'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
        'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
        'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
        'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
        'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
        'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
        'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
        'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
        'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
        'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
        'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
        'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
        'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
        'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
        'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
        'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
        'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
        'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
        'parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir '+
        'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
        'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
        'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
        'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
        'strtoupper strtr strval substr substr_compare';

    var keywords = 'and or xor array as break case ' +
        'cfunction class const continue declare default die do else ' +
        'elseif empty enddeclare endfor endforeach endif endswitch endwhile ' +
        'extends for foreach function include include_once global if ' +
        'new old_function return static switch use require require_once ' +
        'var while abstract interface public implements extends private protected throw';

    var constants = '__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /\$\w+/g, css: 'variable' },
        { regex: new RegExp(this.getKeywords(funcs), 'gmi'), css: 'functions' },
        { regex: new RegExp(this.getKeywords(constants), 'gmi'), css: 'constants' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
};

SyntaxHighlighter.brushes.Php.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Php.aliases   = ['php'];


// For Python
SyntaxHighlighter.brushes.Python = function() {
    var keywords = 'and assert break class continue def del elif else ' +
                    'except exec finally for from global if import in is ' +
                    'lambda not or pass print raise return try yield while';

    var special = 'None True False self cls class_';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
        { regex: /^\s*@\w+/gm, css: 'decorator' },
        { regex: /(['\"]{3})([^\1])*?\1/gm, css: 'comments' },
        { regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, css: 'string' },
        { regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, css: 'string' },
        { regex: /\+|\-|\*|\/|\%|=|==/gm, css: 'keyword' },
        { regex: /\b\d+\.?\w*/g, css: 'value' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(special), 'gm'), css: 'color1' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Python.prototype  = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Python.aliases    = ['python'];


// For Ruby
SyntaxHighlighter.brushes.Ruby = function() {
    var keywords = 'alias and BEGIN begin break case class def define_method defined do each else elsif ' +
        'END end ensure false for if in module new next nil not or raise redo rescue retry return ' +
        'self super then throw true undef unless until when while yield';

    var builtins = 'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' +
        'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' +
        'ThreadGroup Thread Time TrueClass';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /\b[A-Z0-9_]+\b/g, css: 'constants' },
        { regex: /:[a-z][A-Za-z0-9_]*/g, css: 'color2' },
        { regex: /(\$|@@|@)\w+/g, css: 'variable bold' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(builtins), 'gm'), css: 'color1' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Ruby.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Ruby.aliases   = ['ruby'];


// For Coffee
SyntaxHighlighter.brushes.CoffeeScript = function() {
    var csKeywords, jsKeywords, keywords;
    jsKeywords = 'if else new return try catch finally throw break continue for in while delete instanceof typeof switch super extends class case default do function var void with const let debugger enum export import native __extends __hasProp';
    csKeywords = 'then unless and or is isnt not of by where when until';
    keywords   = jsKeywords + ' ' + csKeywords;

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
        { regex: /\#\#\#[\s\S]*?\#\#\#/gm, css: 'comments'},
        { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string'},
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string'},
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string'},
        { regex: /\'\'\'[\s\S]*?\'\'\'/gm, css: 'string'},
        { regex: /\/\/\/[\s\S]*?\/\/\//gm, css: 'string'},
        { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gmi, css: 'value'},
        { regex: /(@[\w._]*|this[\w._]*)/g, css: 'variable bold'},
        { regex: /(([\w._]+)::([\w._]*))/g, css: 'variable bold'},
        { regex: /([\w._]+)\s*(?=\=)/g, css: 'variable bold'},
        { regex: /(-&gt;|->|=&gt;|=>|===|==|=|>|&gt;|<|&lt;|\.\.\.|&&|&amp;&amp;|\|\||\!\!|\!|\+\+|\+|--|-|\[|\]|\(|\)|\{|\})|\?|\/|\*|\%/g, css: 'keyword'},
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword'}
    ];
    return;
};

SyntaxHighlighter.brushes.CoffeeScript.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CoffeeScript.aliases   = ['coffee'];


// For JavaScript
SyntaxHighlighter.brushes.JScript = function() {
    var keywords = 'abstract boolean break byte case catch char class const continue debugger ' +
            'default delete do double else enum export extends false final finally float ' +
            'for function goto if implements import in instanceof int interface long native ' +
            'new null package private protected public return short static super switch ' +
            'synchronized this throw throws transient true try typeof var void volatile while with';

    this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
            { regex: /\s*#.*/gm, css: 'preprocessor' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
};

SyntaxHighlighter.brushes.JScript.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.JScript.aliases = ['js', 'javascript'];


// For Erlang
(function() {
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var keywords = 'after and andalso band begin bnot bor bsl bsr bxor '+
            'case catch cond div end fun if let not of or orelse '+
            'query receive rem try when xor'+
            ' module export import define';

        this.regexList = [
            { regex: new RegExp("[A-Z][A-Za-z0-9_]+", 'g'), css: 'constants' },
            { regex: new RegExp("\\%.+", 'gm'), css: 'comments' },
            { regex: new RegExp("\\?[A-Za-z0-9_]+", 'g'), css: 'preprocessor' },
            { regex: new RegExp("[a-z0-9_]+:[a-z0-9_]+", 'g'), css: 'functions' },
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
        ];
    };

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['erlang'];

    SyntaxHighlighter.brushes.Erland = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


// For Java
SyntaxHighlighter.brushes.Java = function() {
    var keywords = 'abstract assert boolean break byte case catch char class const ' +
                    'continue default do double else enum extends ' +
                    'false final finally float for goto if implements import ' +
                    'instanceof int interface long native new null ' +
                    'package private protected public return ' +
                    'short static strictfp super switch synchronized this throw throws true ' +
                    'transient try void volatile while';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: 'value' },
        { regex: /(?!\@interface\b)\@[\$\w]+\b/g, css: 'color1' },
        { regex: /\@interface\b/g, css: 'color2' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Java.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Java.aliases   = ['java'];


// For Groovy
SyntaxHighlighter.brushes.Groovy = function() {
    var keywords = 'as assert break case catch class continue def default do else extends finally ' +
        'if in implements import instanceof interface new package property return switch ' +
        'throw throws try while public protected private static';

    var types = 'void boolean byte char short int long float double';

    var constants = 'null';

    var methods = 'allProperties count get size '+
        'collect each eachProperty eachPropertyName eachWithIndex find findAll ' +
        'findIndexOf grep inject max min reverseEach sort ' +
        'asImmutable asSynchronized flatten intersect join pop reverse subMap toList ' +
        'padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize ' +
        'eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText ' +
        'splitEachLine withReader append encodeBase64 decodeBase64 filterLine ' +
        'transformChar transformLine withOutputStream withPrintWriter withStream ' +
        'withStreams withWriter withWriterAppend write writeLine '+
        'dump inspect invokeMethod print println step times upto use waitForOrKill '+
        'getText';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
        { regex: /""".*"""/g, css: 'string' },
        { regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'), css: 'value' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(types), 'gm'), css: 'color1' },
        { regex: new RegExp(this.getKeywords(constants), 'gm'), css: 'constants' },
        { regex: new RegExp(this.getKeywords(methods), 'gm'), css: 'functions' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
}

SyntaxHighlighter.brushes.Groovy.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Groovy.aliases   = ['groovy'];


// For Scala
(function() {
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var keywords = 'val sealed case def true trait implicit forSome import match object null finally super ' +
                        'override try lazy for var catch throw type extends class while with new final yield abstract ' +
                        'else do if return protected private this package false';

        var keyops = '[_:=><%#@]+';

        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
            { regex: /0x[a-f0-9]+|\d+(\.\d+)?/gi, css: 'value' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
            { regex: new RegExp(keyops, 'gm'), css: 'keyword' }
        ];
    }

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['scala'];

    SyntaxHighlighter.brushes.Scala = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


// For Clojure
function ClojureRegExp(pattern) {
    pattern = pattern + '(?=[[\\]{}(),\\s])';
    this.regex = new RegExp(pattern, 'g');
    this.lookBehind = /[\[\]{}(),\s]$/;
}

ClojureRegExp.prototype.exec = function (str) {
    var match, leftContext;
    while (match=this.regex.exec(str)) {
        leftContext = str.substring(0, match.index);
        if (this.lookBehind.test(leftContext)) {
            return match;
        }
        else {
            this.regex.lastIndex = match.index + 1;
        }
    }
    return null;
};

SyntaxHighlighter.brushes.Clojure = function () {
    var special_forms =
        '. def do fn if let loop monitor-enter monitor-exit new quote recur set! ' +
        'throw try var',
        clojure_core =
            '* *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* ' +
            '*command-line-args* *compile-files* *compile-path* *e *err* *file* ' +
            '*flush-on-newline* *in* *macro-meta* *math-context* *ns* *out* ' +
            '*print-dup* *print-length* *print-level* *print-meta* *print-readably* ' +
            '*read-eval* *source-path* *use-context-classloader* ' +
            '*warn-on-reflection* + - -> -&gt; ->> -&gt;&gt; .. / < &lt; <= &lt;= = ' +
            '== > &gt; >= &gt;= accessor aclone ' +
            'add-classpath add-watch agent agent-errors aget alength alias all-ns ' +
            'alter alter-meta! alter-var-root amap ancestors and apply areduce ' +
            'array-map aset aset-boolean aset-byte aset-char aset-double aset-float ' +
            'aset-int aset-long aset-short assert assoc assoc! assoc-in associative? ' +
            'atom await await-for await1 bases bean bigdec bigint binding bit-and ' +
            'bit-and-not bit-clear bit-flip bit-not bit-or bit-set bit-shift-left ' +
            'bit-shift-right bit-test bit-xor boolean boolean-array booleans ' +
            'bound-fn bound-fn* butlast byte byte-array bytes cast char char-array ' +
            'char-escape-string char-name-string char? chars chunk chunk-append ' +
            'chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? ' +
            'class class? clear-agent-errors clojure-version coll? comment commute ' +
            'comp comparator compare compare-and-set! compile complement concat cond ' +
            'condp conj conj! cons constantly construct-proxy contains? count ' +
            'counted? create-ns create-struct cycle dec decimal? declare definline ' +
            'defmacro defmethod defmulti defn defn- defonce defstruct delay delay? ' +
            'deliver deref derive descendants destructure disj disj! dissoc dissoc! ' +
            'distinct distinct? doall doc dorun doseq dosync dotimes doto double ' +
            'double-array doubles drop drop-last drop-while empty empty? ensure ' +
            'enumeration-seq eval even? every? false? ffirst file-seq filter find ' +
            'find-doc find-ns find-var first float float-array float? floats flush ' +
            'fn fn? fnext for force format future future-call future-cancel ' +
            'future-cancelled? future-done? future? gen-class gen-interface gensym ' +
            'get get-in get-method get-proxy-class get-thread-bindings get-validator ' +
            'hash hash-map hash-set identical? identity if-let if-not ifn? import ' +
            'in-ns inc init-proxy instance? int int-array integer? interleave intern ' +
            'interpose into into-array ints io! isa? iterate iterator-seq juxt key ' +
            'keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list ' +
            'list* list? load load-file load-reader load-string loaded-libs locking ' +
            'long long-array longs loop macroexpand macroexpand-1 make-array ' +
            'make-hierarchy map map? mapcat max max-key memfn memoize merge ' +
            'merge-with meta method-sig methods min min-key mod name namespace neg? ' +
            'newline next nfirst nil? nnext not not-any? not-empty not-every? not= ' +
            '  ns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics ' +
            'ns-refers ns-resolve ns-unalias ns-unmap nth nthnext num number? odd? ' +
            'or parents partial partition pcalls peek persistent! pmap pop pop! ' +
            'pop-thread-bindings pos? pr pr-str prefer-method prefers ' +
            'primitives-classnames print print-ctor print-doc print-dup print-method ' +
            'print-namespace-doc print-simple print-special-doc print-str printf ' +
            'println println-str prn prn-str promise proxy proxy-call-with-super ' +
            'proxy-mappings proxy-name proxy-super push-thread-bindings pvalues quot ' +
            'rand rand-int range ratio? rational? rationalize re-find re-groups ' +
            're-matcher re-matches re-pattern re-seq read read-line read-string ' +
            'reduce ref ref-history-count ref-max-history ref-min-history ref-set ' +
            'refer refer-clojure release-pending-sends rem remove remove-method ' +
            'remove-ns remove-watch repeat repeatedly replace replicate require ' +
            'reset! reset-meta! resolve rest resultset-seq reverse reversible? rseq ' +
            'rsubseq second select-keys send send-off seq seq? seque sequence ' +
            'sequential? set set-validator! set? short short-array shorts ' +
            'shutdown-agents slurp some sort sort-by sorted-map sorted-map-by ' +
            'sorted-set sorted-set-by sorted? special-form-anchor special-symbol? ' +
            'split-at split-with str stream? string? struct struct-map subs subseq ' +
            'subvec supers swap! symbol symbol? sync syntax-symbol-anchor take ' +
            'take-last take-nth take-while test the-ns time to-array to-array-2d ' +
            'trampoline transient tree-seq true? type unchecked-add unchecked-dec ' +
            'unchecked-divide unchecked-inc unchecked-multiply unchecked-negate ' +
            'unchecked-remainder unchecked-subtract underive unquote ' +
            'unquote-splicing update-in update-proxy use val vals var-get var-set ' +
            'var? vary-meta vec vector vector? when when-first when-let when-not ' +
            'while with-bindings with-bindings* with-in-str with-loading-context ' +
            'with-local-vars with-meta with-open with-out-str with-precision xml-seq ' +
            'zero? zipmap ';

    this.getKeywords = function (keywordStr) {
        keywordStr = keywordStr.replace(/[\-\[\]{}()*+?.\\\^$|,#]/g, "\\$&");
        keywordStr = keywordStr.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '|');
        return '(?:' + keywordStr + ')';
    };

    this.regexList = [
        { regex: new RegExp(';.*$', 'gm'), css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
        { regex: /#"(?:\.|(\\\")|[^\""\n])*"/g, css: 'string' },
        { regex: /\[|\]/g, css: 'keyword' },
        { regex: /&(amp;)?/g, css: 'keyword' },
        { regex: /#?\{|\}/g, css: 'keyword' },
        { regex: /#\^\{/g, css: 'keyword' },
        { regex: /#\(|%/g, css: 'keyword' },
        { regex: /@/g, css: 'keyword' },
        { regex: /(['`]|~@?)[\[({]/g, css: 'keyword' },
        { regex: /\(|\)/g, css: 'keyword' },
        { regex: /\\.\b/g, css: 'value' },
        { regex: /[+\-]?\b0x[0-9A-F]+\b/gi, css: 'value' },
        { regex: new ClojureRegExp("[+-]?\\b\\d+(\\.\\d*)?([eE][+-]?\\d+|M)?\\b"), css: 'value' },
        { regex: /^[+\-]?\b\d+(\.\d*)?([eE][+\-]?\d+|M)?\b/g, css: 'value' },
        { regex: /\b(true|false|nil)\b/g, css: 'value' },
        { regex: /(`|#?'|~@?)[\w-.\/]+/g, css: 'color1' },
        { regex: /:[A-Za-z0-9_\-]+/g, css: 'constants' },
        { regex: new ClojureRegExp(this.getKeywords(special_forms)), css: 'preprocessor' },
        { regex: /\#\^[A-Za-z]\w*/g, css: 'preprocessor' },
        { regex: new ClojureRegExp(this.getKeywords(clojure_core)), css: 'functions' }
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
};

SyntaxHighlighter.brushes.Clojure.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Clojure.aliases   = ['clojure'];


// For Racket/CommonLisp
SyntaxHighlighter.brushes.Lisp = function(){
    var funcs     = 'lambda list progn mapcar car cdr reverse member append format';
    var keywords  = 'let while unless cond if eq t nil defvar dotimes setf listp numberp not equal';
    var macros    = 'loop when dolist dotimes defun';
    var operators = '> < + - = * / %';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
        { regex: new RegExp('&\\w+;', 'g'), css: 'plain' },
        { regex: new RegExp(';.*', 'g'), css: 'comments' },
        { regex: new RegExp("'(\\w|-)+", 'g'), css: 'variable' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(macros), 'gm'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(funcs), 'gm'), css: 'functions' },
    ];
}

SyntaxHighlighter.brushes.Lisp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Lisp.aliases   = ['racket', 'lisp'];

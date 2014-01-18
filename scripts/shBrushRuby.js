/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * @version
 * 2.0.278 (February 03 2009)
 *
 * @author
 * Alex Gorbatchev
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * Licensed under a GNU Lesser General Public License.
 * http://creativecommons.org/licenses/LGPL/2.1/
 *
 * SyntaxHighlighter is donationware. You are allowed to download, modify and distribute 
 * the source code in accordance with LGPL 2.1 license, however if you want to use 
 * SyntaxHighlighter on your site or include it in your product, you must donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 */
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
SyntaxHighlighter.brushes.Ruby.aliases   = ['ruby', 'Ruby'];

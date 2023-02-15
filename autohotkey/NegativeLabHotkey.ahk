SetTitleMatchMode, RegEx 

+F5::Edit ; Shift-F5 launches the current AutoHotkey script in preferred editor, else Notepad 
^F5::Reload ; Ctrl-F5 reloads the current AutoHotKey script after any edits.

; Require admin to run
if not A_IsAdmin
{
   Run *RunAs "%A_ScriptFullPath%"  ; Requires v1.0.92.01+
   ExitApp
}

; ================
; HOW TO CUSTOMIZE
; ================
; 1. First, you must download and install AutoHotKeys on your system from https://www.autohotkey.com/
; 2. After installation, find the language below that matches your language setting in Lightroom
; 3. Change the hotkey code (the letters and symbols before "::") to the keycode you want to use
; Symbols to know: # = Windows logo key, ! = Alt, ^ = Control, + = Shift
; So, for example, if you wanted the hotkey to be "Ctrl X", the hotkey code would look like this: ^X::
; 4. After updating the hotkey, save the file, then double-click it to run it

; English
#IfWinActive Adobe.*Lightroom.*Develop || Adobe.*Lightroom.*Library
^!N::
   Send, {Alt down}f{Alt up}u{Enter}N
Return

; German / Deutsch
#IfWinActive Adobe.*Lightroom.*Entwickeln || Adobe.*Lightroom.*Bibliothek
^!p::
   Send, {Alt down}d{Alt up}zN
Return

; French
#IfWinActive Adobe.*Lightroom.*Développement || Adobe.*Lightroom.*Bibliothéque
^!X::
   Send, {Alt down}f{Alt up}MN
Return

; Netherlands - adobe classic
#IfWinActive Adobe.*Lightroom.*Classic.*Ontwikkelen || Adobe.*Lightroom.*Classic.*Bibliotheek 
!N::
   Send, {Alt down}s{Alt up}u{Enter}N
Return

; Netherlands - adobe 6
#IfWinActive Adobe Photoshop Lightroom - Ontwikkelen || Adobe Photoshop Lightroom - Bibliotheek
^+X::
   Send, {Alt down}s{Alt up}s{Enter}N
Return

; Italian Lightroom Classic
#IfWinActive Adobe.*Lightroom.*Classic.*Sviluppo || Adobe.*Lightroom.*Classic.*Libreria
!+X::
   Send, {Alt down}f{Alt up}xN
Return

; Italian Lightroom 6
#IfWinActive Adobe Photoshop Lightroom - Sviluppo || Adobe Photoshop Lightroom - Libreria
!+X::
   Send, {Alt down}f{Alt up}pN
Return

; Portoguese
#IfWinActive Adobe.*Lightroom.*Revelação
!X::
   Send, {Alt down}a{Alt up}p{Enter}N
Return

; Spanish
#IfWinActive Adobe.*Lightroom.*Revelar || Adobe.*Lightroom.*Biblioteca
!X::
   Send, {Alt down}c{Alt up}xN
Return

; Swedish
#IfWinActive Adobe.*Lightroom.*Framkalla || Adobe.*Lightroom.*Bibliotek
^!N::
   Send, {Alt down}a{Alt up}hN
Return











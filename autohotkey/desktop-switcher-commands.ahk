SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory

#Include desktop-switcher.ahk

; === SYMBOLS ===
; !   <- Alt
; +   <- Shift
; ^   <- Ctrl
; #   <- Win
; add < or > in front for left or right key

; switch desktop left and right based on arrow keys
<!<^Left::switchDesktopToLeft()
<!<^Right::switchDesktopToRight()

<!<^Home::deleteVirtualDesktop()
<!<^End::createVirtualDesktop()

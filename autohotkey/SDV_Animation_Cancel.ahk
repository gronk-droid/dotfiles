#If WinActive("ahk_exe StardewModdingAPI.exe") || WinActive("ahk_exe Stardew Valley.exe")

XButton1:: Send {RShift down}{r down}{Delete down}
XButton1 up:: Send {RShift up}{r up}{Delete up}

XButton2::
    While GetKeyState("XButton2","P")
    {
        sendEvent {LButton Down}
        sleep 10
        sendEvent {LButton Up}
        sleep 125
        sendEvent {r Down}{Delete Down}{RShift Down}
        sleep 10
        sendEvent {r Up}{Delete Up}{RShift Up}
    }
    sleep 30
return
#IfWinActive
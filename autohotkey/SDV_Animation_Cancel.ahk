#If WinActive("ahk_exe StardewModdingAPI.exe") || WinActive("ahk_exe Stardew Valley.exe")

XButton1:: Send {RShift down}{r down}{Delete down}
XButton1 up:: Send {RShift up}{r up}{Delete up}
#IfWinActive
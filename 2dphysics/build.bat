set VSLANG=1033
chcp 65001


set PROJECT_DIR=C:\Users\USER\Documents\work\pkmphy2d
set SDL_PATH=%PROJECT_DIR%\src\SDL3-3.2.16
set INCLUDE_DIR=%SDL_PATH%\include
set LIB_DIR=%SDL_PATH%\lib\x64
set BUILD_DIR=%PROJECT_DIR%\build\

set SOURCE=main.cpp
set OUTPUT=myapp.exe


cl src/App.c ^
/MTd ^
/Zi ^
/Fe%BUILD_DIR%\sdl_phy2d.exe ^
/I %INCLUDE_DIR% ^
SDL3.lib user32.lib winmm.lib gdi32.lib shell32.lib setupapi.lib oleaut32.lib advapi32.lib imm32.lib version.lib ole32.lib ^
/link /libpath:%LIB_DIR% ^
/Subsystem:Windows ^

#!/usr/bin/env sh

sketchybar  --clone     system.label       label_template                               \
            --set       system.label       label=sys                                    \
                                          label.align=center                            \
                                          position=left                                 \
                                          drawing=on                                    \
                                          script="$PLUGIN_DIR/window_title.sh"          \
            --subscribe system.label       front_app_switched                           \
                                                                                        \
            --add       item              battery left                                  \
            --set       battery           update_freq=3                                 \
                        battery           script="$PLUGIN_DIR/power.sh"                 \
                        battery           icon=                                        \
                                                                                        \
            --add       item              system.mic left                               \
            --set       system.mic        update_freq=100                               \
                                          label.drawing=off                             \
                                          script="$PLUGIN_DIR/mic.sh"                   \
                                          click_script="$PLUGIN_DIR/mic_click.sh"       \
                                                                                        \
            --add       item               system.caffeinate left                       \
            --set       system.caffeinate  update_freq=100                              \
                                          icon=$LOADING                                 \
                                          label.drawing=off                             \
                                          script="$PLUGIN_DIR/caffeinate.sh"            \
            --subscribe system.caffeinate  mouse.clicked                                \
                                                                                        \
            --add       item               system.yabai_float left                      \
            --set       system.yabai_float script="$PLUGIN_DIR/yabai_float.sh"          \
                                          icon.font="$FONT:Bold:16.0"                   \
                                          label.drawing=off                             \
                                          updates=on                                    \
            --subscribe system.yabai_float front_app_switched window_focus mouse.clicked\
                                                                                        \
            --add       bracket           system                                        \
                                          system.label                                  \
                                          "Control Center,Battery"                      \
                                          "Control Center,WiFi"                         \
                                          "Control Center,Sound"                        \
                                          system.mic                                    \
                                          system.yabai_float                            \
                                                                                        \
            --set       system             background.drawing=on

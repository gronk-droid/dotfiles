#!/bin/bash
CHARGING=$(pmset -g batt | grep 'AC Power')
if [[ ${CHARGING} != "" ]]; then
    BATT_SCRIPT="$PLUGIN_DIR/charging.sh"
    BATT_ICON_SIZE="$FONT:Regular:26.0"
else
    BATT_SCRIPT="$PLUGIN_DIR/battery.sh"
    BATT_ICON_SIZE="$FONT:Regular:13.0"
fi



sketchybar  --clone     system.label      label_template                                \
            --set       system.label      label=sys                                     \
                                          label.align=center                            \
                                          position=left                                 \
                                          drawing=on                                    \
                                          script="$PLUGIN_DIR/window_title.sh"          \
            --subscribe system.label      front_app_switched                            \
                                                                                        \
            --add       item              battery left                                  \
            --set       battery           update_freq=100                               \
                                          script="$BATT_SCRIPT"                         \
                                          icon.font="$BATT_ICON_SIZE"                   \
                                          label.font="$FONT:Bold Italic:14.0"           \
                                          background.height=$SEGMENT_HEIGHT             \
                                          label.padding_right=0                         \
                                                                                        \
            --add       item               system.caffeinate left                       \
            --set       system.caffeinate  update_freq=100                              \
                                           icon=$LOADING                                \
                                           label.drawing=off                            \
                                           script="$PLUGIN_DIR/caffeinate.sh"           \
            --subscribe system.caffeinate  mouse.clicked                                \
                                                                                        \
            --add       item               system.yabai_float left                      \
            --set       system.yabai_float script="$PLUGIN_DIR/yabai_float.sh"          \
                                           label.drawing=off                            \
                                           updates=on                                   \
            --subscribe system.yabai_float front_app_switched window_focus mouse.clicked\
                                                                                        \
            --add       bracket            system                                       \
                                           system.label                                 \
                                           battery                                      \
                                           system.caffeinate                            \
                                           system.yabai_float                           \
                                                                                        \
            --set       system             background.drawing=on

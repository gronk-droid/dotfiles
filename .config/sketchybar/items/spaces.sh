#!/bin/bash

sketchybar --add       space              space_template left                \
           --set       space_template     icon.highlight_color=0xffFF6188    \
                                          label.drawing=off                  \
                                          icon.font="$FONT:Regular:32.0"     \
                                          drawing=off                        \
                                          updates=on                         \
                                          associated_display=1               \
                                          script="$PLUGIN_DIR/space.sh"      \
                                          click_script="$SPACE_CLICK_SCRIPT" \
                                                                             \
           --clone     spaces_1.label     label_template                     \
           --set       spaces_1.label     label=spc                          \
                                          label.padding=38                   \
                                          label.align=center                 \
                                          associated_display=1               \
                                          position=left                      \
                                          drawing=on                         \
                                                                             \
           --clone     web                space_template                     \
           --set       web                associated_space=1                 \
                                          icon=                             \
                                          icon.highlight_color=0xffFF6188    \
                                          drawing=on                         \
                                                                             \
           --clone     code               space_template                     \
           --set       code               associated_space=2                 \
                                          icon.font="$FONT:Regular:42.0"     \
                                          icon=                             \
                                          icon.highlight_color=0xffFC9867    \
                                          drawing=on                         \
                                                                             \
           --clone     communication      space_template                     \
           --set       communication      associated_space=3                 \
                                          icon=                             \
                                          icon.highlight_color=0xff87dcc6    \
                                          drawing=on                         \
                                                                             \
           --clone     background         space_template                     \
           --set       background         associated_space=4                 \
                                          icon=                             \
                                          icon.highlight_color=0xffAB9DF2    \
                                          drawing=on                         \
                                                                             \
           --add       bracket            spaces_1                           \
                                          spaces_1.label                     \
                                          web                                \
                                          code                               \
                                          communication                      \
                                          background                         \
                                                                             \
           --set       spaces_1           background.drawing=on              \
                                                                             \

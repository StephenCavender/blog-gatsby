#!/bin/sh
#
# Publish
#
# This moves a given post out of drafts and into a dated post folder structure

POSTS="content/posts"

if [ -d $POSTS/drafts/$1 ]
  then
    # Create folder path from today's date
    TODAY="$(date +"%Y")"/"$(date +"%m")"/"$(date +"%d")"

    # Make folder structure
    mkdir -p $POSTS/$TODAY

    # Move given post into 'today' folder
    mv $POSTS/drafts/$1 $POSTS/$TODAY
  else
    echo "'$1' doesn't exist in drafts"
fi


exit 0
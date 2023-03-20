#!/bin/sh
#
# Draft
#
# This copies the template post into a named post folder

DRAFTS=content/posts/drafts

if [ ! -d $DRAFTS/$1 ]
  then
    # Copy template post into named post folder under drafts
    cp -R $DRAFTS/template $DRAFTS/$1
  else
    echo "'$1' already exists in drafts"
fi

exit 0
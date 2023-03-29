#!/bin/sh
#
# Draft
#
# This copies the template post into a named post folder

DRAFTS=content/posts/drafts

for draft in "$@"
do
  if [ ! -d $DRAFTS/$draft ]
    then
      # Copy template post into named post folder under drafts
      cp -R $DRAFTS/template $DRAFTS/$draft
    else
      echo "'$draft' already exists in drafts"
  fi
done



exit 0
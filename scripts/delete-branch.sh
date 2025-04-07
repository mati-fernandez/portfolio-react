#!/bin/bash

# List all local branches except current
branches=$(git branch | grep -v '^\*' | sed 's/^[[:space:]]*//')

echo "📍 Select a branch to delete:"
select branch in $branches; do
  if [ -n "$branch" ]; then
    echo "Are you sure you want to delete branch '$branch'?"
    select yn in "Yes (local only)" "Yes (local and remote)" "Cancel"; do
      case $yn in
        "Yes (local only)")
          git branch -d "$branch"
          break
          ;;
        "Yes (local and remote)")
          git branch -d "$branch"
          git push origin --delete "$branch"
          break
          ;;
        "Cancel")
          echo "Cancelled."
          break
          ;;
      esac
    done
    break
  else
    echo "❌ Invalid option. Try again."
  fi
done

#!/usr/bin/env bash
set -euo pipefail

##############################################################################
# ts-to-js-src.sh
# ---------------------------------------------------------------------------
# Renames every *.ts file under ./src (except *.d.ts, *.tsx, test/spec files)
# to *.js and rewrites local import/require specifiers from ".ts" → ".js".
#
# USAGE
#   ./ts-to-js-src.sh          # dry-run preview
#   ./ts-to-js-src.sh false    # perform the rename & rewrite
##############################################################################

DRY_RUN=${1:-true}                               # default: preview only
ROOT=$(git rev-parse --show-toplevel)
SRC="$ROOT/src"

##############################################################################
# 1. collect target files
##############################################################################
TS_FILES=()
while IFS= read -r -d '' f; do TS_FILES+=("$f"); done < <(
  find "$SRC" -type f -name '*.ts' \
    ! -name '*.d.ts' \
    ! -name '*.tsx' \
    ! -name '*.test.ts' \
    ! -name '*.spec.ts' \
    -print0
)

echo
echo "Will rename ${#TS_FILES[@]} files under ./src:"
printf '  %s\n' "${TS_FILES[@]:0:10}"
[[ ${#TS_FILES[@]} -gt 10 ]] && echo "  …"

if [[ "$DRY_RUN" == true ]]; then
  echo "Dry-run only. Execute for real with:"
  echo "  $(basename "$0") false"
  exit 0
fi

##############################################################################
# 2. rename files (git mv if tracked, mv otherwise)
##############################################################################
echo
echo "Renaming:"
for src in "${TS_FILES[@]}"; do
  dst="${src%.ts}.js"
  if git ls-files --error-unmatch "$src" >/dev/null 2>&1; then
    git mv -f "$src" "$dst"
  else
    mv "$src" "$dst"
  fi
done

##############################################################################
# 3. rewrite import / require specifiers
##############################################################################
echo
echo "Rewriting specifiers:"
grep -RIl --exclude='*.d.ts' --exclude='*.map' \
         --exclude-dir='{node_modules,.git,dist}' \
         -e '\.ts["'\'']' "$SRC" |
while read -r file; do
  # replace ".ts'|"ts"  → ".js'|".js"
  sed -E -i '' 's/\.ts([\'\"])/\.js\1/g' "$file"
  echo "  $file"
done

echo
echo "✅  Done.  Review the changes and commit."

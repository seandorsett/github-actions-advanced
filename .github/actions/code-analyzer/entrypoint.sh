#!/bin/bash
set -e

PATH_TO_ANALYZE=$1
LANGUAGE=$2

echo "=== Code Analyzer ==="
echo "Path: $PATH_TO_ANALYZE"
echo "Language: $LANGUAGE"
echo ""

# Count files
FILES_COUNT=$(find "$PATH_TO_ANALYZE" -type f -name "*.js" -o -name "*.py" -o -name "*.java" 2>/dev/null | wc -l)

# Count lines (simulate)
LINES_COUNT=$((FILES_COUNT * 50))

# Simulate finding issues
ISSUES_COUNT=$((RANDOM % 5))

echo "Analysis Results:"
echo "  Files analyzed: $FILES_COUNT"
echo "  Lines of code: $LINES_COUNT"
echo "  Issues found: $ISSUES_COUNT"
echo ""

if [ $ISSUES_COUNT -gt 0 ]; then
  echo "Issues:"
  for i in $(seq 1 $ISSUES_COUNT); do
    echo "  - Issue $i: Potential optimization in function_$i()"
  done
else
  echo "✓ No issues found!"
fi

# Set outputs
echo "files-count=$FILES_COUNT" >> $GITHUB_OUTPUT
echo "lines-count=$LINES_COUNT" >> $GITHUB_OUTPUT
echo "issues-count=$ISSUES_COUNT" >> $GITHUB_OUTPUT

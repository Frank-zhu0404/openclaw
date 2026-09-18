#!/usr/bin/env python3
import json
from pathlib import Path
p=Path(__file__).with_name('api-default-tool.redacted.json')
data=json.loads(p.read_text())
print('OpenClaw PR #151324 · redacted MiniMax-M3 provider shape')
print('endpoint: https://api.minimaxi.com  model: MiniMax-M3')
print('content blocks (provider order):')
for i, block in enumerate(data.get('content', []), 1):
    kind=block.get('type','unknown')
    extra=' (ordinary text before tool_use)' if kind == 'text' else ''
    print(f'  {i}. {kind}{extra}')
print('projection: suppress commentary text; retain tool progress + final answer')

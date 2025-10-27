#!/usr/bin/env python3
"""音频切分工具 - 将音频文件按指定时长切分"""

import os
from pydub import AudioSegment


def split_audio(input_file, segment_duration_seconds=29, output_dir="output"):
    """
    将音频文件切分成固定时长的片段

    Args:
        input_file: 输入音频文件路径
        segment_duration_seconds: 每个片段的时长(秒)
        output_dir: 输出目录
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    audio = AudioSegment.from_mp3(input_file)
    total_duration = len(audio)
    segment_duration_ms = segment_duration_seconds * 1000

    base_name = os.path.splitext(os.path.basename(input_file))[0]

    segment_count = 0
    for start_ms in range(0, total_duration, segment_duration_ms):
        end_ms = min(start_ms + segment_duration_ms, total_duration)
        segment = audio[start_ms:end_ms]

        segment_count += 1
        output_file = os.path.join(output_dir, f"{base_name}_part{segment_count:02d}.mp3")
        segment.export(output_file, format="mp3")

        duration = (end_ms - start_ms) / 1000
        print(f"已生成: {output_file} (时长: {duration:.1f}秒)")

    print(f"\n切分完成! 共生成 {segment_count} 个片段")


if __name__ == "__main__":
    split_audio("哪吒-我命由我不由天.mp3", segment_duration_seconds=29)

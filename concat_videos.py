#!/usr/bin/env python3
"""
视频拼接脚本
将 mp4-clip 文件夹中的视频按照名称前面的数字顺序拼接
"""
import os
import re
import subprocess
from pathlib import Path


def get_video_files(directory):
    """获取目录中的所有视频文件并按数字排序"""
    video_files = []

    for file in os.listdir(directory):
        if file.endswith('.mp4'):
            # 提取文件名开头的数字
            match = re.match(r'^(\d+)-', file)
            if match:
                number = int(match.group(1))
                video_files.append((number, file))

    # 按数字排序
    video_files.sort(key=lambda x: x[0])
    return [f for _, f in video_files]


def create_concat_file(video_files, input_dir, concat_file_path):
    """创建 ffmpeg concat 文件列表"""
    with open(concat_file_path, 'w', encoding='utf-8') as f:
        for video_file in video_files:
            # 使用绝对路径以避免路径问题
            full_path = os.path.join(input_dir, video_file)
            # ffmpeg concat 需要特殊的格式
            f.write(f"file '{full_path}'\n")


def concat_videos(input_dir, output_file, concat_file):
    """使用 ffmpeg 拼接视频"""
    cmd = [
        'ffmpeg',
        '-f', 'concat',
        '-safe', '0',
        '-i', concat_file,
        '-c', 'copy',  # 直接复制,不重新编码,速度更快
        output_file
    ]

    print(f"执行命令: {' '.join(cmd)}")
    subprocess.run(cmd, check=True)


def main():
    # 设置路径
    base_dir = Path(__file__).parent
    input_dir = base_dir / 'mp4-clip'
    output_dir = base_dir / 'output'
    concat_file = base_dir / 'concat_list.txt'
    output_file = output_dir / 'merged_video.mp4'

    # 确保输出目录存在
    output_dir.mkdir(exist_ok=True)

    # 获取并排序视频文件
    print("正在扫描视频文件...")
    video_files = get_video_files(input_dir)

    if not video_files:
        print("错误: 未找到视频文件")
        return

    print(f"找到 {len(video_files)} 个视频文件:")
    for i, video in enumerate(video_files, 1):
        print(f"  {i}. {video}")

    # 创建 concat 文件
    print("\n创建视频列表文件...")
    create_concat_file(video_files, str(input_dir.absolute()), concat_file)

    # 拼接视频
    print("\n开始拼接视频...")
    try:
        concat_videos(str(input_dir.absolute()), str(output_file), str(concat_file))
        print(f"\n成功! 合并后的视频已保存到: {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"错误: 视频拼接失败 - {e}")
    finally:
        # 清理临时文件
        if concat_file.exists():
            concat_file.unlink()
            print(f"已清理临时文件: {concat_file}")


if __name__ == '__main__':
    main()

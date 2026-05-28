$replacement = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
$pattern = '/@fs/C:/Users/shlok/[^"]+\.(png|jpg|jpeg|webp)'

Get-ChildItem -Recurse -Path "src\pages" -Include "*.jsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, $replacement)
        Set-Content -Path $_.FullName -Value $newContent -NoNewline
        Write-Output "Fixed: $($_.Name)"
    }
}
Write-Output "Done."

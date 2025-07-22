$THRESHOLD = 50

$data = Import-Csv -Path ".\data\test.csv" -Header "Username", "Value" | Sort-Object -Property { [int]$_.Value } -Descending

$valToGetIn = $data[$THRESHOLD - 1].Value

$extract = $data | Where-Object { [int]$_.Value -ge $valToGetIn }

$final = ($extract | ForEach-Object {
    $username = $_.Username
    1..$_.Value | ForEach-Object { $username }
}) -join ","


Write-Host "INFOS"
Write-Host "People with more than $THRESHOLD entries in the CSV file: $($extract.Count)"
Write-Host "Value to get in: $valToGetIn"
Write-Host "__________________________________"

Read-Host "Press Enter to continue"

Write-Host "FORMAT TABLE"

$extract | Format-Table

Write-Host "__________________________________"

Read-Host "Press Enter to continue"

Write-Host "FORMAT LIST`n"

Write-Host $final

Write-Host ""
Pause
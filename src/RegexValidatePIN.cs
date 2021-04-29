// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/csharp

using System;
using System.Text.RegularExpressions;

public class Kata
{
    public static bool ValidatePin(string pin)
    {
        if (pin.Length != 4 && pin.Length != 6) return false;
        return Regex.IsMatch(pin, "^\\d{4}$|^\\d{6}$");
    }
}
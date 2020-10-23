// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/cpp

bool solution(std::string const &str, std::string const &ending)
{
	if (ending.length() > str.length())
	{
		return false;
	}
	return 0 == str.compare(str.length() - ending.length(), ending.length(), ending);
}
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/cpp

#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <cctype>

bool isAnagram(std::string test, std::string original)
{
	std::vector<char> vector(original.begin(), original.end());
	for (auto iterator = std::begin(test); iterator != std::end(test); ++iterator)
	{
		auto originalPosition = find(vector.begin(), vector.end(), tolower(*iterator));
		if (originalPosition == vector.end())
		{
			originalPosition = find(vector.begin(), vector.end(), toupper(*iterator));
		}
		if (originalPosition == vector.end())
		{
			return false;
		}
		else
		{
			vector.erase(originalPosition);
		}
	}
	if (vector.size() > 0)
	{
		return false;
	}
	return true;
}
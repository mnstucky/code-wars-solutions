// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/cpp

#include <vector>

std::vector<int> reverseSeq(int n)
{
	std::vector<int> result;
	for (int i = n; i > 0; --i)
	{
		result.push_back(i);
	}
	return result;
}
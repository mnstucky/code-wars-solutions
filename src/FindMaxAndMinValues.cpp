// https://www.codewars.com/kata/577a98a6ae28071780000989/train/cpp

#include <vector>
using namespace std;

int min(vector<int> list)
{
	auto iter = list.begin();
	int min = *iter;
	for (; iter != list.end(); ++iter)
	{
		min = (*iter < min) ? *iter : min;
	}
	return min;
}

int max(vector<int> list)
{
	auto iter = list.begin();
	int max = *iter;
	for (; iter != list.end(); ++iter)
	{
		max = (*iter > max) ? *iter : max;
	}
	return max;
}
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/cpp

#include <string>

std::string DNAtoRNA(std::string dna)
{
	std::string result = "";
	for (auto iterator = dna.begin(); iterator != dna.end(); ++iterator)
	{
		switch (*iterator)
		{
		case 'G':
			result.append("G");
			break;
		case 'C':
			result.append("C");
			break;
		case 'A':
			result.append("A");
			break;
		case 'T':
			result.append("U");
			break;
		}
	}
	return result;
}
-- https://www.codewars.com/kata/594900e16fd782a607000059/train/sql

SELECT id, length(name) * 8 AS name, birthday, length(race) * 8 AS race
FROM demographics;
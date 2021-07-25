-- Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(MAX_SALARY) - MIN(MIN_SALARY) FROM hr.jobs;

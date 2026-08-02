.PHONY: dev-up dev-stop dev-down prod-up prod-stop prod-down logs clean


dev-up:
	docker compose --env-file .env.development up dev -d --build

dev-stop:
	docker compose stop dev

dev-down:
	docker compose down dev

prod-up:
	docker compose --env-file .env.production up prod -d --build

prod-stop:
	docker compose stop prod

prod-down:
	docker compose down prod

logs:
	docker compose logs -f

clean:
	docker compose down --remove-orphans -v

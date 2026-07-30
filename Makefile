.PHONY: dev-up dev-down prod-up prod-down logs clean


dev-up:
	docker compose --env-file .env.development up dev -d --build

dev-down:
	docker compose stop dev

prod-up:
	docker compose --env-file .env.production up prod -d --build

prod-down:
	docker compose stop prod

logs:
	docker compose logs -f

clean:
	docker compose down --remove-orphans -v

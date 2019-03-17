task default: "help"

desc "Bantuan"
task :help do
  puts <<HELP
Semua proses ini ditangani oleh rake, berikut daftar lengkapnya:

#{%x[rake -T]}

Contoh:
  $ rake test:yaml

Panduan dasar untuk jekyll:
  Untuk build sumber kode:
  $ jekyll build

  Untuk melihat hasil build:
  $ jekyll serve


Panduan lengkap untuk jekyll:

###########################################################################################
#{%x[jekyll -h]}
###########################################################################################
HELP
end

namespace :test do
  desc "Uji file YAML"

  task :yaml do
    require "yaml"

    list_yaml = Dir["./**/*.yml"]

    list_yaml.each do |file|
      begin
        puts "Checking : #{file}"
        YAML.load_file(file)
      rescue Exception
        puts "Failed to read #{file}: #{$!}"
      end
    end
  end
end

namespace :list do
  desc "Generate semua Startup atau Perusahaan pengguna Ruby dan Rails di Indonesia"

  task :companies_id_ruby do
    require "open-uri"
    require "yaml"

    unless File.exist?(Dir.pwd + "/_data")
      FileUtils.mkdir_p Dir.pwd + "/_data"
    end

    File.open(Dir.pwd + "/_data/companies_id_ruby.yml", "wb") {|file|
      file.write open("https://raw.githubusercontent.com/id-ruby/id-ruby/master/_data/companies.yml").read
    }

    unless File.exist?(Dir.pwd + "/assets/showcase/companies_id_ruby/images")
      FileUtils.mkdir_p Dir.pwd + "/assets/showcase/companies_id_ruby/images"
    end

    companies_id_ruby = YAML.load_file(Dir.pwd + "/_data/companies_id_ruby.yml")
    companies_id_ruby.each {|company|
      File.open(Dir.pwd + "/assets/showcase/companies_id_ruby/#{company['image_url']}", "wb") {|file|
        file.write open("https://raw.githubusercontent.com/id-ruby/id-ruby/master/#{company['image_url']}").read
      }
    }
  end
end
